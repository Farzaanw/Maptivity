
import { GoogleGenAI } from "@google/genai";
import { Activity } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const findActivities = async (query: string, lat: number, lng: number): Promise<{ activities: Activity[], text: string }> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-latest",
      contents: `Find popular things to do, restaurants, and attractions related to "${query}" near this location.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: lat,
              longitude: lng
            }
          }
        }
      },
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const activities: Activity[] = groundingChunks
      .filter((chunk: any) => chunk.maps)
      .map((chunk: any, index: number) => ({
        id: `activity-${index}`,
        title: chunk.maps.title || 'Interesting Place',
        description: 'Discovered via Maps grounding',
        uri: chunk.maps.uri || '#',
        category: 'attraction'
      }));

    return {
      activities,
      text: response.text || "Here are some things to do in the area."
    };
  } catch (error) {
    console.error("Error fetching activities:", error);
    return { activities: [], text: "I couldn't find anything in that region. Try a different spot or query." };
  }
};
