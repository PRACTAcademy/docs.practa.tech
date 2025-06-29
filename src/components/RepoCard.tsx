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

    const sizeClass = useMemo(() => {
        // More dynamic distribution to ensure grid fills all available space

        // Large cards - strategically placed to create visual interest
        // Every 7th card or repos with very long descriptions
        if ((index % 7 === 0) || 
            (repo.description && repo.description.length > 120)) {
            return "repo-size-large";
        }

        // Medium cards - balanced distribution
        // Every 3rd card (not divisible by 7) or repos with medium-length descriptions
        if ((index % 3 === 0 && index % 7 !== 0) || 
            (repo.description && repo.description.length > 70) || 
            repo.name.length > 20) {
            return "repo-size-medium";
        }

        // Small cards for the rest - ensures good filling of remaining spaces
        return "repo-size-small";
    }, [repo, index]);

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
