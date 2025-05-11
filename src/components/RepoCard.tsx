import { Card } from "./ui/card";
import { Calendar, Code, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { useMemo } from "react";

type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string | null;
    updated_at: string;
};

type RepoCardProps = {
    repo: Repo;
    index: number;
};

export function RepoCard({ repo, index }: RepoCardProps) {
    const formattedDate = formatDistanceToNow(new Date(repo.updated_at), {
        addSuffix: true,
        locale: enUS,
    });

    // Distribuição pseudo-aleatória baseada no índice para garantir preenchimento do grid
    const sizeClass = useMemo(() => {
        const sizes = ["repo-size-small", "repo-size-medium", "repo-size-large"];
        // Use o índice para garantir distribuição estável e evitar buracos no grid
        return sizes[index % sizes.length];
    }, [index]);

    // Different animation delays based on index
    const getAnimationDelay = () => {
        return `${(index % 9) * 0.1}s`;
    };

    return (
        <Card
            className={`repo-card ${sizeClass}`}
            style={{ animationDelay: getAnimationDelay(), animationFillMode: "forwards" }}
        >
            <div className="repo-card-content">
                <div className="repo-header">
                    <h3 className="repo-title">{repo.name}</h3>
                    <div className="repo-stars">
                        <Star className="star-icon" />
                        <span>{repo.stargazers_count}</span>
                    </div>
                </div>

                <p className="repo-description">
                    {repo.description || "No description"}
                </p>

                <div className="repo-meta">
                    {repo.language && (
                        <div className="repo-language">
                            <Code className="code-icon" />
                            <span>{repo.language}</span>
                        </div>
                    )}

                    <div className="repo-date">
                        <Calendar className="calendar-icon" />
                        <span>Updated {formattedDate}</span>
                    </div>
                </div>

                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                >
                    View Repository
                </a>
            </div>
        </Card>
    );
}
