
import React from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <a 
      href={activity.uri} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all hover:border-indigo-200 active:scale-95"
    >
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {activity.title}
          </h4>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1">
            {activity.description}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {activity.category}
            </span>
            <span className="text-xs text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Details 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ActivityCard;
