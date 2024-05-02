'use client'
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import EnhancedSearchBar from './EnhancedSearchBar';
import EnhancedResults from './EnhancedResults';
import topics from '@/topics_sections.json';


const EnhancedSearch = () => {
  const [results, setResults] = useState<string[]>([]);

  const topicsData = topics.topics.map(topic => ({
    title: topic.title,
    file_name: topic.file_name
  }));

  const fuse = new Fuse(topicsData, {
    keys: ['title'],
    includeScore: true,
    threshold: 0.3
  });

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const searchResults = fuse.search(query);
      const mappedResults = searchResults.map(result => result.item.file_name);
      setResults(mappedResults.slice(0, 5));
    } else {
      setResults([]);
    }
  };

    return (
        <div className=''>
            <div>
                <EnhancedSearchBar onSearch={handleSearch} />
            </div>
            <div>
                <EnhancedResults results={results} />
            </div>
        </div>
    );
};

export default EnhancedSearch;
