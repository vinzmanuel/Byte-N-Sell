import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";


function Pricing({ listingDetails }) {
    const isAvailable = listingDetails?.available;
    const {user} = useUser();

    return (
        <div className="p-10 rounded-xl border shadow-md ml-4">
            {user?.primaryEmailAddress?.emailAddress === listingDetails?.createdBy ? (
                <div> 
                    <h2 className="text-center text-black font-md text-2xl mb-4">
                        Go to profile and My listings to edit this listing
                    </h2>
                
                    <Link to={'/profile'}>
                        <Button className="w-full">
                            My listings
                        </Button>
                    </Link>
                </div>
            ) : isAvailable ? (
                <>
                    <h2>Sold at</h2>
                    <h2 className="font-bold text-black text-4xl mb-4">
                        PHP {new Intl.NumberFormat().format(listingDetails?.sellingPrice)}
                    </h2>
                    <div className="flex flex-col">
                        <Link to={'/checkout/' + listingDetails?.id}>
                            <Button className="w-full">
                                <TiShoppingCart /> Buy Now
                            </Button>
                        </Link>
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-2 text-gray-500">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <Button>
                            <MdOutlineLocalOffer /> Make an offer price
                        </Button>
                    </div>
                </>
            ) : (
                <div className="text-center text-black font-md text-3xl">
                    This item is not available anymore
                </div>
            )}
        </div>
    );
}

export default Pricing;