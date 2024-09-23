import Link from "next/link";

export const metadata = {
    title: 'Не найдено',
    openGraph: {
        title: 'Blog',
    },
}


export default function NotFound() {
    return (
        <div>
            Ничего не найдено
            <div>
                <Link href='/'>main</Link>
            </div>
        </div>
    );
}
