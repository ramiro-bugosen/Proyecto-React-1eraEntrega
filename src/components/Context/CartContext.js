import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { app } from "../../index";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const db = getFirestore(app);
    const [cart, setCart] = useState({ buyer: { name: "", phone: "", email: "" }, items: [], total: 0 })

    const addToCart = (producto, quantity) => {
        const userId = "yEk3U39GSbohrsGPqOhm";

        const cartRef = doc(db, "cart", userId);
        getDoc(cartRef).then((doc) => {
            if (doc.exists()) {
                updateDoc(cartRef, {
                    items: arrayUnion(...Array(quantity).fill(producto)),
                    total: cart.total + producto.precio * quantity
                }).then(() => {
                    console.log("producto agregado al carrito");
                    setCart((prev) => ({
                        ...prev,
                        items: [...prev.items, ...Array(quantity).fill(producto)],
                        total: prev.total + producto.precio * quantity
                    }));
                })
                .catch((error) => {
                    console.error("error al agregar producto al carrito", error);
                });
            } else {
                setDoc(cartRef, {
                    buyer: {
                        name: "userHost",
                        phone: 1111111111,
                        email: "lala@lala.com"
                    },
                    items: [producto],
                    total: producto.precio * quantity 
                }).then(() => {
                    console.log("carrito creado");
                    setCart({
                        buyer: {
                            name: "userHost",
                            phone: 1111111111,
                            email: "lala@lala.com"
                        },
                        items: [producto],
                        total: producto.precio * quantity 
                    });
                }).catch((error) => { console.error(error) });
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;