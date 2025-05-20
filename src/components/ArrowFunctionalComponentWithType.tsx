// type Props = {
//     title: string;
//     description: string;
// }

type A = {
    title: string;
}
type B = {
    description: string;
}
type MergedProps = A & B;

const ArrowFunctionalComponentWithType =({title, description}: MergedProps) => {
    return (
        <>
        <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
        <p className="text-gray-800">{description}</p>
        </>
    )
}


export default ArrowFunctionalComponentWithType