export default () => {
    const currentDate = new Date()

    return (
        <footer className="bg-secondary text-white text-center py-4 xl:py-8">
            <small>
                Developed and designed by Felipe Asenjo. ©{currentDate.getFullYear()}. 
                All rights reserved.
            </small>
        </footer>
    )
}