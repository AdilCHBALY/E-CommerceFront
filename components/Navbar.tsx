import Link from "next/link"
import Container from "./ui/Container"
import MainNav from "./MainNav"
import getCategories from "@/actions/getCategories"
import NavbarActions from "./NavbarActions"

const Navbar = async () => {
    const categories = await getCategories()

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href={"/"} className="ml-4 lg:ml-0 gap-x-2">
                        <p className="font-light text-2xl">
                            Troika
                            <span className="font-bold text-3xl">
                                Store
                            </span>
                        </p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar