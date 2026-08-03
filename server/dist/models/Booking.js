import { Schema, model } from "mongoose";
import crypto from "crypto";
const BookingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
        min: 1,
    },
    occasion: {
        type: String,
        trim: true,
    },
    specialRequests: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        enum: ["confirmed", "cancelled", "completed"],
        default: "confirmed",
    },
    bookingId: {
        type: String,
    },
}, {
    timestamps: true,
});
// Auto-generate booking ID
BookingSchema.pre("save", async function () {
    if (!this.bookingId) {
        this.bookingId = `GR-${crypto
            .randomBytes(4)
            .toString("hex")
            .toUpperCase()}`;
    }
});
export const Booking = model("Booking", BookingSchema);
