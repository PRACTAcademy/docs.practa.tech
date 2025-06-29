import { useEffect, useState } from "react";
import { RepoCard } from "./RepoCard";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import { toast } from "sonner";

type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string | null;
    updated_at: string;
};

export function GithubRepositories() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch repositories from GitHub API
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/orgs/PRACTAcademy/repos");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    setRepos(data);
                    if (data.length > 0) {
                        toast.success(`${data.length} repositories loaded`);
                    }
                } else {
                    setError("API response is not an array");
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknown error";
                setError(`Error fetching repositories: ${errorMessage}`);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <>
                <LoadingSkeleton />
            </>
        );
    }

    if (error) {
        return (
            <Alert variant="destructive" className="animate-fade-in">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        );
    }

    if (repos.length === 0) {
        return (
            <div className="col-span-full text-center p-8 animate-fade-in">
                <p className="text-lg text-gray-600">No repositories available.</p>
            </div>
        );
    }

    return (
        <>
            {repos.map((repo, index) => (
                <RepoCard key={repo.id} repo={repo} index={index} />
            ))}
        </>
    );
}

function LoadingSkeleton() {
    return (
        <>
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 animate-pulse"
                >
                    <Skeleton className="h-6 w-2/3 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-6" />
                    <Skeleton className="h-10 w-1/2 rounded-md" />
                </div>
            ))}
        </>
    );
}