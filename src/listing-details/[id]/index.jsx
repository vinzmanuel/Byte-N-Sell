/* eslint-disable react-hooks/exhaustive-deps */
import Header from '@/components/header';
import Footer from '@/components/footer';
import React, { useEffect, useState } from 'react';
import DetailHeader from '../components/DetailHeader';
import { useParams } from 'react-router-dom';
import { db } from './../../../configs';
import { Listing, ListingImages } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import service from '@/shared/service';
import ListingItem from '@/components/carItem';
import ImageGallery from '../components/ImageGallery';
import Description from '../components/Description';
import Pricing from '../components/Pricing';
import Specifications from '../components/Specifications';
import SellerDetails from '../components/SellerDetails';
import Mostsearched from '@/components/mostsearched';

function ListingDetails() {
    const { id } = useParams();
    const [listingDetails, setListingDetails] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        GetListingDetails();
    }, []);

    const GetListingDetails = async () => {
        const result = await db
            .select()
            .from(Listing)
            .innerJoin(ListingImages, eq(Listing.id, ListingImages.ListingId))
            .where(eq(Listing.id, id));

        const resp = service.FormatResult(result);
        console.log(resp);
        setListingDetails(resp[0]);
    };

    return (
        <div className="w-full">
            <Header />
            <div className="pt-32 px-48 pb-28">
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                    <div className="md:col-span-2">
                        <ImageGallery listingDetails={listingDetails} />
                        <DetailHeader listingDetails={listingDetails} />
                        <Description listingDetails={listingDetails} />
                    </div>
                    <div>
                        <Pricing listingDetails={listingDetails} />
                        <Specifications listingDetails={listingDetails} />
                        <SellerDetails listingDetails={listingDetails} />
                    </div>
                </div>
            </div>
            <Mostsearched />
            <Footer />
        </div>
    );
}

export default ListingDetails;