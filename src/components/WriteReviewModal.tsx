import { useState, FormEvent, ChangeEvent } from "react";
import { Star, X, CheckCircle } from "lucide-react";
import Navigation from "./Navigation";

interface ReviewFormData {
  name: string;
  nameArabic: string;
  product: string;
  rating: number;
  comment: string;
  location: string;
  video: string;
  verified: boolean;
}

interface WriteReviewModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: ReviewFormData) => void;
}

export default function WriteReviewModal({
  open,
  onClose,
  onSubmit,
}: WriteReviewModalProps) {
  const [form, setForm] = useState<ReviewFormData>({
    name: "",
    nameArabic: "",
    product: "",
    rating: 5,
    comment: "",
    location: "",
    video: "",
    verified: false,
  });

  if (!open) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : name === "rating"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
    setForm({
      name: "",
      nameArabic: "",
      product: "",
      rating: 5,
      comment: "",
      location: "",
      video: "",
      verified: false,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gradient-to-b from-card to-background rounded-2xl w-full max-w-lg p-8 relative shadow-2xl border border-primary/20 animate-scale-in">
        {/* ✖ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif font-bold text-primary">
            Write a Review
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Share your authentic Oudhee experience ✨
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-border bg-background rounded-lg p-3 focus:ring-2 focus:ring-primary/40 outline-none transition"
              required
            />
            <input
              name="nameArabic"
              value={form.nameArabic}
              onChange={handleChange}
              placeholder="Your Arabic Name"
              className="w-full border border-border bg-background rounded-lg p-3 focus:ring-2 focus:ring-primary/40 outline-none transition font-arabic"
            />
          </div>

          {/* Product & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              name="product"
              value={form.product}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full border border-border bg-background rounded-lg p-3 focus:ring-2 focus:ring-primary/40 outline-none transition"
              required
            />
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location (e.g. Dubai, UAE)"
              className="w-full border border-border bg-background rounded-lg p-3 focus:ring-2 focus:ring-primary/40 outline-none transition"
            />
          </div>

          {/* Comment */}
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Your Review..."
            className="w-full border border-border bg-background rounded-lg p-3 h-28 resize-none focus:ring-2 focus:ring-primary/40 outline-none transition"
            required
          />

          {/* Video */}
          <input
            name="video"
            value={form.video}
            onChange={handleChange}
            placeholder="YouTube Embed URL (optional)"
            className="w-full border border-border bg-background rounded-lg p-3 focus:ring-2 focus:ring-primary/40 outline-none transition"
          />

          {/* Rating + Verified */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => setForm({ ...form, rating: star })}
                  className={`w-5 h-5 cursor-pointer ${
                    star <= form.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  } transition`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {form.rating} / 5
              </span>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                name="verified"
                checked={form.verified}
                onChange={handleChange}
                className="accent-primary"
              />
              <CheckCircle className="w-4 h-4 text-primary" />
              Verified Purchase
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
