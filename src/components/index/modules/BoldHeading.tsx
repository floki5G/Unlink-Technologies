export function BoldHeading({
    title,
}: {
    title: string | number
}) {
    return (
        <p
            style={{
                color: "white",
            }
            }
            className="text-xl font-semibold "
        >
            {title}
        </p>
    );
}