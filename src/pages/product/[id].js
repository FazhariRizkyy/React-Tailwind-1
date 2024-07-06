import MetaHead from "@/components/MetaHead";

export default function ProductDetail({ data }) {
    return (
        <section>
            <MetaHead
                title={data.title}
                description={data.description}
                image={data.image}
                url={`${process.env.NEXT_PUBLIC_HOST_NAME}/product/${data.id}`}
            />
            <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                <div className="w-full lg:w-[200px]">
                    <img
                        src={data.image}
                        alt={data.title}
                        width={100}
                        className="w-full"
                    />
                </div>
                <div className="pt-10 ml-5">
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <div className="font-bold">{data.category}</div>
                    <div className="text-green-600 font-bold">{data.price}</div>
                    <p className="py-3">{data.description}</p>
                    <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add To Cart</button>
                </div>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    const {
        query: { id },
    } = context;
    // const id = context.query.id

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_API}/products/${id}`
    );
    const data = await response.json();

    return {
        props: { data },
    };
}