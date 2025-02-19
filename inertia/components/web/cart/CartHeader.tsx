import { Link } from '@inertiajs/react';
interface MainMenuProps {
    className?: string;
}
  const CartHeader = ({ className }: MainMenuProps) => {
    return (
        <>
         <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadscrumb-contain">
                        <h2>Cart</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Cart</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
  };

  export default CartHeader;
