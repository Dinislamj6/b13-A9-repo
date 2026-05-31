// import { FieldError, Input, Label, TextField,Select, ListBox, TextArea, Button } from "@heroui/react";

// const AddIdeaPage = () => {
//     return (
//         <div>
//             <form
//             className="p-10 space-y-8"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Destination Name */}
//               <div className="md:col-span-2">
//                 <TextField
//                  name="destinationName" isRequired>
//                   <Label>Destination Name</Label>
//                   <Input placeholder="Bali Paradise" className="rounded-2xl" />
//                   <FieldError />
//                 </TextField>
//               </div>

//               {/* Country */}
//               <TextField name="country" isRequired>
//                 <Label>Country</Label>
//                 <Input placeholder="Indonesia" className="rounded-2xl" />
//                 <FieldError />
//               </TextField>

//               {/* Category - Updated Select Component */}
//               <div>
//                 <Select
//                   name="category"
//                   isRequired
//                   className="w-full"
//                   placeholder="Select category"
//                 >
//                   <Label>Category</Label>
//                   <Select.Trigger className="rounded-2xl">
//                     <Select.Value />
//                     <Select.Indicator />
//                   </Select.Trigger>
//                   <Select.Popover>
//                     <ListBox>
//                       <ListBox.Item id="Beach" textValue="Beach">
//                         Beach
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Mountain" textValue="Mountain">
//                         Mountain
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="City" textValue="City">
//                         City
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Adventure" textValue="Adventure">
//                         Adventure
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Cultural" textValue="Cultural">
//                         Cultural
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                       <ListBox.Item id="Luxury" textValue="Luxury">
//                         Luxury
//                         <ListBox.ItemIndicator />
//                       </ListBox.Item>
//                     </ListBox>
//                   </Select.Popover>
//                 </Select>
//               </div>

//               {/* Price */}
//               <TextField name="price" type="number" isRequired>
//                 <Label>Price (USD)</Label>
//                 <Input
//                   type="number"
//                   placeholder="1299"
//                   className="rounded-2xl"
//                 />
//                 <FieldError />
//               </TextField>

//               {/* Duration */}
//               <TextField name="duration" isRequired>
//                 <Label>Duration</Label>
//                 <Input
//                   placeholder="7 Days / 6 Nights"
//                   className="rounded-2xl"
//                 />
//                 <FieldError />
//               </TextField>

//               {/* Departure Date */}
//               <div className="md:col-span-2">
//                 <TextField name="departureDate" type="date" isRequired>
//                   <Label>Departure Date</Label>
//                   <Input type="date" className="rounded-2xl" />
//                   <FieldError />
//                 </TextField>
//               </div>

//               {/* Image URL - Removed preview */}
//               <div className="md:col-span-2">
//                 <TextField name="imageUrl" isRequired>
//                   <Label>Image URL</Label>
//                   <Input
//                     type="url"
//                     placeholder="https://example.com/bali-paradise.jpg"
//                     className="rounded-2xl"
//                   />
//                   <FieldError />
//                 </TextField>
//               </div>

//               {/* Description */}
//               <div className="md:col-span-2">
//                 <TextField name="description" isRequired>
//                   <Label>Description</Label>
//                   <TextArea
//                     placeholder="Describe the travel experience..."
//                     className="rounded-3xl"
//                   />
//                   <FieldError />
//                 </TextField>
//               </div>
//             </div>

//             {/* Buttons */}

//             <Button
//               type="submit"
//               variant="outline"
//             //   isLoading={isPending}
//               className=" rounded-none w-full bg-cyan-500 text-white"
//             >
//               {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
//             </Button>
//           </form>
//         </div>
//     );
// };

// export default AddIdeaPage;
"use client";
import { object } from 'framer-motion/client';
import React, { useState } from 'react';
// যদি HeroUI ইনস্টল করা থাকে তবে এগুলো ব্যবহার করবেন, অথবা standard Tailwind দিয়ে এই স্টাইল ধরে রাখতে পারেন।
// import { Input, Textarea, Select, SelectItem, Button, Card, CardBody } from "@heroui/react"; 
import { toast } from 'react-hot-toast'; // অথবা আপনার ব্যবহৃত টোস্ট লাইব্রেরি

const AddIdea =  () => {

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const destinationName = Object.fromEntries(formData.entries());
    console.log(destinationName);

  const res = await fetch('http://localhost:5000/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'      },
      body: JSON.stringify(destinationName)
    }) 
    const data = await res.json();
    console.log(data);
    // setLoading(true);
    // const form = e.target;
    // const ideaTitle = form.ideaTitle.value;
    // const shortDescription = form.shortDescription.value;
    // const detailedDescription = form.detailedDescription.value;
    // const category = form.category.value;
    // const tags = form.tags.value;
    // const imageUrl = form.imageUrl.value;
    // const budget = form.budget.value;
    // const targetAudience = form.targetAudience.value;
    // const problemStatement = form.problemStatement.value;
    // const proposedSolution = form.proposedSolution.value;

    // const newIdea = {
    //   ideaTitle,
    //   shortDescription,
    //   detailedDescription,
    //   category,
    //   tags: tags.split(',').map(tag => tag.trim()),
    //   imageUrl,
    //   budget,
    //   targetAudience,
    //   problemStatement,
    //   proposedSolution,
    //   authorEmail: "user@example.com", // আপনার auth context থেকে আসবে
    //   authorName: "John Doe",
    //   createdAt: new Date()
    // };

    try {
      // এখানে আপনার server-side API কল করবেন
      // const response = await fetch('http://localhost:5000/ideas', { ... })
      
      toast.success('Idea submitted successfully to IdeaVault! 🚀');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-content1 rounded-2xl shadow-xl border border-divider p-6 sm:p-10 transition-all duration-300">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Share Your Billion-Dollar Idea
          </h2>
          <p className="text-default-500 mt-2 text-sm sm:text-base">
            Fill out the details below to validate your concept with the IdeaVault community.
          </p>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Title & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Idea Title *</label>
              <input
                required
                type="text"
                name="ideaTitle"
                placeholder="Enter a catchy title for your startup"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Category *</label>
              <select
                required
                name="category"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm appearance-none cursor-pointer"
              >
                <option value="">Select a category</option>
                <option value="Tech">Technology / SaaS</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="Health">Health & Wellness</option>
                <option value="Education">EdTech / Education</option>
                <option value="Fintech">Fintech</option>
                <option value="E-commerce">E-commerce</option>
              </select>
            </div>
          </div>

          {/* Row 2: Short Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-default-7xl">Short Description *</label>
            <input
              required
              type="text"
              name="shortDescription"
              placeholder="A one-line elevator pitch (Max 150 characters)"
              maxLength={150}
              className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
            />
          </div>

          {/* Row 3: Image URL & Estimated Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Image URL *</label>
              <input
                required
                type="url"
                name="imageUrl"
                placeholder="https://example.com/banner.jpg"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Estimated Budget (Optional)</label>
              <input
                type="text"
                name="budget"
                placeholder="e.g., $5,000 - $10,000"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
            </div>
          </div>

          {/* Row 4: Target Audience & Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Target Audience *</label>
              <input
                required
                type="text"
                name="targetAudience"
                placeholder="e.g., College Students, Small Businesses"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Tags (Optional)</label>
              <input
                type="text"
                name="tags"
                placeholder="e.g., saas, remote, productivity (comma separated)"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
              />
            </div>
          </div>

          {/* Row 5: Problem Statement & Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Problem Statement *</label>
              <textarea
                required
                name="problemStatement"
                rows={4}
                placeholder="What pain point are you trying to solve?"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-default-7xl">Proposed Solution *</label>
              <textarea
                required
                name="proposedSolution"
                rows={4}
                placeholder="How does your startup idea fix this problem?"
                className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm resize-none"
              ></textarea>
            </div>
          </div>

          {/* Row 6: Detailed Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-default-7xl">Detailed Description *</label>
            <textarea
              required
              name="detailedDescription"
              rows={6}
              placeholder="Deep dive into your idea. Explain features, business model, or implementation strategy..."
              className="w-full px-4 py-3 rounded-xl border border-divider bg-content2 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0113.28-6.03l1.42-1.42A10 10 0 003 12h1z" />
                  </svg>
                  Submitting Idea...
                </>
              ) : (
                "Publish Idea to Vault"
              )}
            </button>
          </div>

        </form>
        {/* Form End */}
      </div>
    </div>
  );
};

export default AddIdea;