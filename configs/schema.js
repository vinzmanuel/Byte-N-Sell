import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Listing=pgTable('Listing',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    category:varchar('category').notNull(),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    model:varchar('model').notNull(),
    brand:varchar('brand').notNull(),
    yearBought:varchar('yearBought'),
    condition:varchar('condition').notNull(),
    listingDescription:varchar('listingDescription').notNull(),
    location:varchar('location'). notNull(),
    method:varchar('method').notNull(),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull(),
    userImageUrl:varchar('userImageUrl'),
    dateCreated:varchar('dateCreated')
})

export const ListingImages=pgTable('listingImages',{
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    ListingId:integer('ListingId',).notNull().references(()=>Listing.id)
})