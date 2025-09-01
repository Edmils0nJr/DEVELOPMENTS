let ws = null;

const elemento  = (id) => document.getElementById(id);
const statusEl = elemento('status');
const logEl = elemento('log');
const connectBtn = elemento('connectBtn');
const disconnectBtn = elemento('disconnectBtn');

async function comandESP(comando) {
  const ip = 'http://192.168.100.124';
  try {
      const response = await fetch(`${ip}/${comando}`);
      const data = await response.text();
      console.log(data);
  } catch (error) {
      console.error("Erro na requisição:", error);
  }
}

function setStatus(kind, text) {
  statusEl.className = 'badge ' + kind;
  statusEl.textContent = text;
}

function normalizeWsUrl(raw) {
  try {
    const u = new URL(raw);
    if (u.protocol === 'ws:' || u.protocol === 'wss:') return u.href;
  } catch (e) {}
  const scheme = (location.protocol === 'https:') ? 'wss' : 'ws';
  return `${scheme}://${raw.replace(/^\/*/, '')}`;
}

function connect() {
  const raw = elemento('wsUrl').value.trim();
  if (!raw) { alert('Informe o endereço do WebSocket'); return; }

  const url = normalizeWsUrl(raw);
  try {
    ws = new WebSocket(url);
  } catch (e) {
    setStatus('error', 'erro');
    console.log('Falha ao criar WebSocket: ' + e.message);
    return;
  }

  connectBtn.disabled = true;
  disconnectBtn.disabled = false;
  setStatus('connecting', 'conectando…');
  console.log('Conectando: ' + url);

  ws.onopen = () => {
    setStatus('connected', 'conectado');
    console.log('Conexão aberta');
  };

  ws.onmessage = async (evt) => {
    if (typeof evt.data === 'string') {
       let msg = JSON.parse(evt.data);
       if (msg.cmd) {
        comandESP(msg.cmd);
       }
    } else if (evt.data instanceof Blob) {
      const text = await evt.data.text().catch(() => '[Blob recebido]');
       console.log('← (blob) ' + text);
    } else if (evt.data instanceof ArrayBuffer) {
       console.log('← (binário) ' + new TextDecoder().decode(evt.data));
    } else {
       console.log('← (desconhecido)');
    }
  };

  ws.onerror = (err) => {
    setStatus('error', 'erro');
    console.log('Erro de conexão.');
  };

  ws.onclose = () => {
    setStatus('closed', 'desconectado');
    connectBtn.disabled = false;
    disconnectBtn.disabled = true;
  };
}

function disconnect() {
  if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
    console.log('Encerrando conexão…');
    ws.close(1000, 'client closing');
  }
}

connectBtn.addEventListener('click', connect);
disconnectBtn.addEventListener('click', disconnect);
