import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee"
                    data-id="${employee.id}"
                    data-name="${employee.name}">
                    ${employee.name}
                </li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    const employeeId = parseInt(itemClicked.dataset.id)
    const employeeName = itemClicked.dataset.name

    if (itemClicked.dataset.type === "employee") {
        const orders = getOrders()
        let fulfilledOrderCount = 0

        for (const order of orders) {
            if (order.employeeId === employeeId) {
                fulfilledOrderCount++
            }
        }

        window.alert(`${employeeName} has sold ${fulfilledOrderCount} products`)
    }
})