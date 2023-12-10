import Layout from "@/components/Layout";
import {useState} from "react";
import axios from "axios";
import {redirect} from "next/navigation";
import {Router, useRouter} from "next/router";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function createProduct(ev) {
        ev.preventDefault()
        const data = {title, description, price};
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push('/products');
    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>Новый товар</h1>
                <label>Название товара</label>
                <input
                    type="text"
                    placeholder="Название товара"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <label>Описание товара</label>
                <textarea
                    placeholder="Описание товара"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
                <label>Цена товара</label>
                <input
                    type="text"
                    placeholder="Цена"
                    onChange={ev => setPrice(ev.target.value)}
                />
                <button
                    type="submit"
                    className="btn-primary"

                >Сохранить</button>
            </form>

        </Layout>
    );
}