import { Link } from "@inertiajs/react";

interface MainMenuProps {
    className?: string;
}
  const MobileMenu = ({ className }: MainMenuProps) => {
    return (
        <>
    <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
            <li className="active">
                <Link href="/">
                    <i className="iconly-Home icli"></i>
                    <span>Home</span>
                </Link>
            </li>
            <li className="mobile-category">
                <Link href="javascript:void(0)">
                    <i className="iconly-Category icli js-link"></i>
                    <span>Category</span>
                </Link>
            </li>

            <li>
                <Link href="/search" className="search-box">
                    <i className="iconly-Search icli"></i>
                    <span>Search</span>
                </Link>
            </li>

            <li>
                <Link href="/wishlist" className="notifi-wishlist">
                    <i className="iconly-Heart icli"></i>
                    <span>My Wish</span>
                </Link>
            </li>

            <li>
                <Link href="/cart">
                    <i className="iconly-Bag-2 icli fly-cate"></i>
                    <span>Cart</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
    );
  };

  export default MobileMenu;
