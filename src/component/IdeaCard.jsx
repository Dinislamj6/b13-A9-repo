"use client";

import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Button,
    Chip,
} from "@nextui-org/react";
import Link from "next/link";
import {Heart} from '@gravity-ui/icons';


const IdeaCard = ({ idea }) => {
    return (
        <Card className="shadow-lg border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">


            <div className="overflow-hidden">
                <Image
                    removeWrapper
                    alt={idea?.title}
                    className="w-full h-[220px] object-cover"
                    src={idea?.imageURL}
                />
            </div>

            <CardBody className="space-y-4 p-5">


                <div className="flex justify-between items-center">
                    <Chip color="primary" variant="flat">
                        {idea?.category}
                    </Chip>

                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Heart /> {idea?.likes}
                    </span>
                </div>


                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {idea?.title}
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm line-clamp-3">
                        {idea?.shortDescription}
                    </p>
                </div>


                <div className="flex flex-wrap gap-2">
                    {idea?.tags &&
                        (Array.isArray(idea.tags)
                            ? idea.tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    size="sm"
                                    variant="bordered"
                                    className="dark:border-zinc-700"
                                >
                                    #{tag}
                                </Chip>
                            ))
                            : idea.tags
                                .split(",")
                                .map((tag, index) => (
                                    <Chip
                                        key={index}
                                        size="sm"
                                        variant="bordered"
                                        className="dark:border-zinc-700"
                                    >
                                        #{tag}
                                    </Chip>
                                )))}
                </div>


                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                        <span className="font-semibold">Budget:</span>{" "}
                        {idea?.estimatedBudget || idea?.budget}
                    </p>

                    <p>
                        <span className="font-semibold">Audience:</span>{" "}
                        {idea?.targetAudience}
                    </p>
                </div>
            </CardBody>


            <CardFooter className="p-5 pt-0">
                <Link href={`/idea/${idea?._id}`}>
                    <button
                       variant="secondary"
                        color="primary"
                        className="btn w-full bg-blue-800 p-2 text-white rounded-md"
                    >
                        Idea Details
                    </button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default IdeaCard;