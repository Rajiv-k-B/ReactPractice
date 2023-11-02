export default function Product() {
    const products = ["Laptop", "Phone", "Modem"];
    return (
        <div>
            {products.map((product) => (
                <h3>{product}</h3>
            ))}
        </div>
    );
}