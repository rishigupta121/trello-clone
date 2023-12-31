const OrganisationLayout = ({
    children
}: {
    children:React.ReactNode
}) => {
    return(
        <main className="pt-20 md:pt-24 px-4 max-w-6xl zxl:max-w-screen-xl mx-auto">
            <div className="flex gap-x-4">
                <div className="w-64 shrink-0 hidden md:block">
                    {/* sidebar */}
                </div>
            </div>
            {children}
        </main>
    )
}

export default OrganisationLayout;