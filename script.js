let mesas = [];
function crearMesa() {
    const mesaId = mesas.length + 1;
    mesas.push({ id: mesaId, pedidos: [] });
    renderMesas();
}

function renderMesas() {
    const mesaSelect = document.getElementById('mesa');
    mesaSelect.innerHTML = '';
    mesas.forEach(mesa => {
        const option = document.createElement('option');
        option.value = mesa.id;
        option.textContent = `Mesa ${mesa.id}`;
        mesaSelect.appendChild(option);
    });

    const listaMesas = document.getElementById('lista-mesas');
    listaMesas.innerHTML = mesas.map(mesa => `<p>Mesa ${mesa.id}</p>`).join('');
}

const formPedido = document.getElementById('form-pedido');
const listaPedidos = document.getElementById('lista-pedidos');

formPedido.addEventListener('submit', function (event) {
    event.preventDefault();
    const mesaId = parseInt(document.getElementById('mesa').value);
    const descripcionPedido = document.getElementById('pedido').value;

    const mesa = mesas.find(m => m.id === mesaId);
    mesa.pedidos.push(descripcionPedido);

    renderPedidos();
    formPedido.reset();
});

function renderPedidos() {
    listaPedidos.innerHTML = mesas
        .map(mesa => `
            <div>
                <h3>Mesa ${mesa.id}</h3>
                <ul>
                    ${mesa.pedidos.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        `)
        .join('');
}


const inventario = [];
const formInventario = document.getElementById('form-inventario');
const listaInventario = document.getElementById('lista-inventario');

formInventario.addEventListener('submit', function (event) {
    event.preventDefault();
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    inventario.push({ producto, cantidad });
    renderInventario();
    formInventario.reset();
});

function renderInventario() {
    listaInventario.innerHTML = inventario
        .map(item => `<p>${item.producto}: ${item.cantidad}</p>`)
        .join('');
}

crearMesa(); 
