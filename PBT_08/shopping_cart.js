function createCart() {
    let items = [];
    let discountPercent = 0;
    let shippingDiscount = 0;

    function formatVND(num) {
        return num.toLocaleString("vi-VN");
    }

    function calcSubtotal() {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function calcTotal() {
        let total = calcSubtotal();
        total = total * (1 - discountPercent);
        total = total - shippingDiscount;
        return total < 0 ? 0 : total;
    }

    return {
        addItem(product, quantity = 1) {
            const existing = items.find(i => i.id === product.id);

            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        removeItem(productId) {
            items = items.filter(i => i.id !== productId);
        },

        updateQuantity(productId, newQuantity) {
            const item = items.find(i => i.id === productId);

            if (!item) return;

            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
            }
        },

        getTotal() {
            return calcTotal();
        },

        applyDiscount(code) {
            discountPercent = 0;
            shippingDiscount = 0;

            switch (code) {
                case "SALE10":
                    discountPercent = 0.10;
                    break;
                case "SALE20":
                    discountPercent = 0.20;
                    break;
                case "FREESHIP":
                    shippingDiscount = 30000;
                    break;
            }
        },

        printCart() {
            const header = "┌──────────────────────────────────────────────┐";
            const footer = "└──────────────────────────────────────────────┘";
            const sep = "├──────────────────────────────────────────────┤";

            console.log(header);
            console.log("│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │");

            items.forEach((item, index) => {
                const total = item.price * item.quantity;

                console.log(
                    `│ ${index + 1} │ ${item.name.padEnd(13)} │ ${String(item.quantity).padStart(2)} │ ${formatVND(item.price).padStart(11)} │ ${formatVND(total).padStart(11)} │`
                );
            });

            console.log(sep);
            console.log(`│ Tổng cộng: ${formatVND(calcTotal()).padStart(32)}đ │`);
            console.log(footer);
        },

        getItemCount() {
            return items.reduce((sum, i) => sum + i.quantity, 0);
        },

        clearCart() {
            items = [];
            discountPercent = 0;
            shippingDiscount = 0;
        }
    };
}

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());