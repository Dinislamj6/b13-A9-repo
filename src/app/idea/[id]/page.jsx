import React from "react";
import { Card, Button, Chip } from "@heroui/react";
import Image from "next/image";

// ১. ডেটা ফেচিং ফাংশন (Error Handling সহ)
const getIdea = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/ideas/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

// ২. মেইন পেজ কম্পোনেন্ট
const IdeaDetailsPage = async ({ params }) => {
  // Next.js-এর নিয়ম অনুযায়ী params-কে await করতে হবে
  const { id } = await params;
  const idea = await getIdea(id);

  // যদি কোনো আইডি না পাওয়া যায় বা এপিআই থেকে ডেটা না আসে
  if (!idea) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950">
        <p className="text-xl font-semibold text-red-500">Idea not found or Server Error!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 py-10 px-4">
          
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-xl border dark:border-zinc-800 overflow-hidden">

          {/* IMAGE */}
          <div className="relative w-full h-[350px]">
            <Image
              src={idea.imageURL || idea.imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"}
              alt={idea.title || idea.ideaTitle || "Idea Image"}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-6">

            {/* TITLE & CATEGORY */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h1 className="text-3xl font-bold text-black dark:text-white">
                  {idea.title || idea.ideaTitle}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {idea.shortDescription}
                </p>
              </div>

              {idea.category && (
                <Chip color="primary" variant="flat">
                  {idea.category}
                </Chip>
              )}
            </div>

            {/* TAGS (নিরাপদ উপায়ে লুপ চালানো হয়েছে) */}
            <div className="flex flex-wrap gap-2">
              {Array.isArray(idea.tags) ? (
                idea.tags.map((tag, index) => (
                  <Chip key={index} color="secondary" variant="bordered">
                    #{tag}
                  </Chip>
                ))
              ) : idea.tags ? (
                <Chip color="secondary" variant="bordered">
                  #{idea.tags}
                </Chip>
              ) : (
                <span className="text-sm text-gray-400">No tags available</span>
              )}
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  Estimated Budget
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {idea.estimatedBudget || idea.budget || "N/A"}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  Target Audience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {idea.targetAudience || "N/A"}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  Likes
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ❤️ {idea.likes || 0}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  Created At
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {idea.createdAt || "N/A"}
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            {idea.detailedDescription && (
              <div className="bg-gray-50 dark:bg-zinc-900 p-5 rounded-xl">
                <h2 className="text-2xl font-semibold mb-3 dark:text-white">
                  Detailed Description
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  {idea.detailedDescription}
                </p>
              </div>
            )}

            {/* PROBLEM */}
            {idea.problemStatement && (
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-5 rounded-xl">
                <h2 className="text-2xl font-semibold mb-3 text-red-600">
                  Problem Statement
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-7">
                  {idea.problemStatement}
                </p>
              </div>
            )}

            {/* SOLUTION */}
            {idea.proposedSolution && (
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-5 rounded-xl">
                <h2 className="text-2xl font-semibold mb-3 text-green-600">
                  Proposed Solution
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-7">
                  {idea.proposedSolution}
                </p>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex gap-3 pt-3">
              <Button color="primary">Like Idea</Button>
              <Button variant="bordered">Share</Button>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;