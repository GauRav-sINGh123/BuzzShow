'use client'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { X ,ImagePlus} from "lucide-react";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
       <div className="rounded-lg border border-emerald-800/20 bg-black/40 p-4 backdrop-blur-lg">
        <div className="flex gap-4">
          <RxAvatar className="w-10 h-10 ring-2 ring-emerald-500/20">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="User" />
          </RxAvatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's happening?"
              className="min-h-[100px] bg-white/5 border-white/10 focus:border-emerald-500/50 transition-colors"
            />
            
            {/* Image Preview */}
            {selectedImage && (
              <div className="relative mt-4 rounded-lg overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt="Preview" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <label className={cn(
                  "cursor-pointer p-2 rounded-lg transition-colors hover:bg-white/5",
                  selectedImage && "text-emerald-500"
                )}>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <ImagePlus className="w-5 h-5" />
                </label>
              </div>
              <Button className="accent-gradient px-8 rounded-full hover:opacity-90 transition-opacity border-0">
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
