/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath();
    let column = null;

    for (const element of path) {
        const { area } = element.dataset;
        if (area) {
            column = area;
            break;
        }
    }

    if (!column) return;
    updateDragging({ over: column });
    updateDraggingHtml({ over: column });
}


const handleDragStart = (event) => {
    const {id, area} = event.target.dataset;
    const text = event.target.textContent.trim();
    updateDragging({ id, area, text });
    updateDraggingHtml({ drag: true});
}

const handleDragEnd = (event) => {
    updateDragging({ drag: false});
}

const handleHelpToggle = (event) => {
const help = state.help ? null : 'visible';
updateState({ help });
}

const handleAddToggle = (event) => {
    const add = state.add ? null : 'visible';
    updateState({ add })
}

const handleAddSubmit = (event) => {
    event.preventDefault()
    const text = html.add.text.value.trim();
    const table = html.value.value.trim();
    if (!table || !order) return {
        addOrder({ text, table }){
        updateState({ add: null})}
    }
}

const handleEditToggle = (event) => {
    const { id } = event.target.dataset;
    const order = state.orders.find(o => o.id === id);
    if (!order) return;
    updateEditing({ ...order}),
    updateState({ edit: order.id })
}
const handleEditSubmit = (event) => {
    event.preventDefault();
    const id = state.edit;
    const text = html.edit.text.value.trim();
    const table = html.edit.table.value.trim();
    const status = html.edit.status.value.trim();
    if (!id || !text || !table || !status) return;
    editOrder({ id, text, table, status })
    updateState({ edit: null})
}
const handleDelete = (event) => {
    const id = state.edit;
    if (!id) return;
    deleteOrder({ id });
    updateState({ edit: null});
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver);
    htmlArea.addEventListener('dragenter', updateDraggingHtml);
    htmlArea.addEventListener('dragleave', updateDraggingHtml);
    htmlArea.addEventListener('drop', handleDrop);

    function handleDrop(event) {
        event.preventDefault();
        const { over } = state.dragging;
        const { area } = event.target.dataset;
        if (!over || over === area) return;
        moveOrder({ from: over, to: area });
        updateDragging({ over: null})
    }
}