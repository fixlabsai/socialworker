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
      id: "6Aw10fLPaxU",
      title: "High Rise Societies Are New Covid Hotspots",
      description: "High Rise Societies Are New Covid Hotspots"
    },
    {
      id: "bt1RZSAR7R4",
      title: "The Federation President Ghaziabad",
      description: "Let's experience the best ways to run RWA smoothly"
    },
    {
      id: "7XhAWo_0fqc",
      title: "Social Welfare Success Stories",
      description: "Real stories from families we've helped"
    },
    {
      id: "15GHjTZyOX4",
      title: "Social Welfare Success Stories",
      description: "Real stories from families we've helped"
    },
    {
      id: "Hip-gyQkWJ0",
      title: "Social Welfare Success Stories",
      description: "Real stories from families we've helped"
    },
    {
      id: "uikgoOLbDWo",
      title: "Social Welfare Success Stories",
      description: "Real stories from families we've helped"
    },
    {
      id: "qShjkSvSqlg",
      title: "Social Welfare Success Stories",
      description: "Real stories from families we've helped"
    },
    {
      id: "eX3lGpOCs00",
      title: "Social Welfare Success Stories",
      description: "Real stories from families we've helped"
    },
    {
      id: "J1Z_jf7lNsU",
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
      </div>
    </section>
  );
}
