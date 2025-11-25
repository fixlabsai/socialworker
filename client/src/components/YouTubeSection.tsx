import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
}

export default function YouTubeSection() {
  // Add your YouTube video IDs here
  const videos: Video[] = [
    {
      id: "dQw4w9WgXcQ",
      title: "Community Service Initiative 2024",
      description: "Highlights from our latest community outreach program"
    },
    {
      id: "jNQXAC9IVRw",
      title: "Annual Charity Event",
      description: "Coverage of this year's major charity fundraiser"
    },
    {
      id: "9bZkp7q19f0",
      title: "Social Welfare Success Stories",
      description: "Real stories from families we've helped"
    }
  ];

  return (
    <section id="videos" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-videos-title">
            Video Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-videos-subtitle">
            Watch our initiatives and community impact in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover-elevate" data-testid={`card-video-${video.id}`}>
              <CardContent className="p-0">
                {/* YouTube Embed */}
                <div className="relative w-full aspect-video bg-black overflow-hidden group">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid={`iframe-video-${video.id}`}
                  />
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2" data-testid={`text-video-title-${video.id}`}>
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-video-description-${video.id}`}>
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-card rounded-lg border text-center">
          <p className="text-muted-foreground mb-4">
            Want to add more videos to showcase? Replace the YouTube video IDs in the YouTubeSection component.
          </p>
          <p className="text-sm text-muted-foreground">
            Video IDs can be found in YouTube URLs: youtube.com/watch?v=<strong>VIDEO_ID_HERE</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
