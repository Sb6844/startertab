import { UserSettings } from "@/types";

export const defaultSettings: UserSettings = {
  themes: [
    {
      themeName: "colored dark",
      globalSettings: {
        backgroundColor: "#1B202B",
        textColor: "#fff",
        subTextColor: "#ddd",
        tileType: "None",
        dropShadow: "",
        tileBorder: "",
        sidebarBackgroundColor: "#33393D",
        themePickerBubbleColor:
          "linear-gradient(90deg, black 50%, #E89B4B 50%);",
        sidebarBorderColor: "#666",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Twitter Feed Tile",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "#E89C4B",
        textColor: "#222222",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "#9AB899",
        textColor: "#222222",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "#E89C4B",
        textColor: "#222222",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "#F06808",
        textColor: "#222222",
        tileType: "Day Planner",
      },
      tile6: {
        backgroundColor: "#E89C4B",
        textColor: "#222222",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#fff",
        bonsaiBaseColor: "#000",
      },
      tile7: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "#9AB899",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "#E89C4B",
        textColor: "#222222",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "#9AB899",
        textColor: "#222222",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
    {
      themeName: "colored light",
      globalSettings: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "None",
        dropShadow: "",
        tileBorder: "",
        sidebarBackgroundColor: "#eeeeee",
        themePickerBubbleColor:
          "linear-gradient(90deg, white 50%, #E89B4B 50%);",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "#65abc1",
        textColor: "#ffffff",
        tileType: "Hacker News Feed",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "#E89C4B",
        textColor: "#ffffff",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "#9AB899",
        textColor: "#ffffff",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "#65abc1",
        textColor: "#ffffff",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "#F06808",
        textColor: "#ffffff",
        tileType: "Search Bar",
      },
      tile6: {
        backgroundColor: "#E89C4B",
        textColor: "#ffffff",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#fff",
        bonsaiBaseColor: "#000",
      },
      tile7: {
        backgroundColor: "#E89C4B",
        textColor: "#ffffff",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "#65abc1",
        textColor: "#ffffff",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "#9AB899",
        textColor: "#ffffff",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "#E89C4B",
        textColor: "#ffffff",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "#65abc1",
        textColor: "#ffffff",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
    {
      themeName: "Wavy",
      globalSettings: {
        backgroundColor: "url(/wavy.jpeg)",
        textColor: "#222222",
        tileType: "None",
        dropShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        tileBorder: "1px solid rgba(255, 255, 255, 0.3)",
        sidebarBackgroundColor: "#eeeeee",
        themePickerBubbleColor: "linear-gradient(360deg, blue 50%, white 50%);",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Twitter Feed Tile",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Day Planner",
      },
      tile6: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#202020",
        bonsaiBaseColor: "#000",
      },
      tile7: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
    {
      themeName: "Pink",
      globalSettings: {
        backgroundColor:
          "linear-gradient(to bottom right, #ABA1EE , #F29AD8) fixed",
        textColor: "#222222",
        tileType: "None",
        dropShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        tileBorder: "1px solid rgba(255, 255, 255, 0.3)",
        sidebarBackgroundColor: "#eeeeee",
        themePickerBubbleColor:
          "linear-gradient(90deg, #ABA1EE 50%, #f882ff 50%);",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Hacker News Feed",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Day Planner",
      },
      tile6: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#202020",
        bonsaiBaseColor: "#000",
      },
      tile7: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
    {
      themeName: "light",
      globalSettings: {
        backgroundColor: "white",
        textColor: "#222222",
        tileType: "None",
        dropShadow: "",
        tileBorder: "1px solid black",
        sidebarBackgroundColor: "#eeeeee",
        themePickerBubbleColor: "white",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Hacker News Feed",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Search Bar",
      },
      tile6: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#202020",
        bonsaiBaseColor: "#000",
      },
      tile7: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "#ffffff",
        textColor: "#222222",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
    {
      themeName: "dark",
      globalSettings: {
        backgroundColor: "#000",
        textColor: "#fff",
        subTextColor: "#ddd",
        tileType: "None",
        sidebarBackgroundColor: "#33393D",
        themePickerBubbleColor: "black",
        sidebarBorderColor: "#666",
        dropShadow: "2px 2px 6px rgba(0,0,0,.3)",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Hacker News Feed",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Search Bar",
      },
      tile6: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#fff",
        bonsaiBaseColor: "#fff",
      },
      tile7: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "#1A1C1D",
        textColor: "#E0E0E0",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
    {
      themeName: "glassmorphism light",
      globalSettings: {
        backgroundColor:
          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%) fixed",
        textColor: "#222222",
        tileType: "None",
        dropShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        tileBorder: "1px solid rgba(255, 255, 255, 0.3)",
        sidebarBackgroundColor: "#eeeeee",
        themePickerBubbleColor:
          "linear-gradient(90deg, white 50%, #77C9CA 50%);",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Twitter Feed Tile",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Day Planner",
      },
      tile6: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#202020",
        bonsaiBaseColor: "#000",
      },
      tile7: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
    {
      themeName: "glassmorphism dark",
      globalSettings: {
        backgroundColor:
          "linear-gradient(160deg, black 0%, #80D0C7 100%) fixed",
        textColor: "#fff",
        tileType: "None",
        dropShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        tileBorder: "1px solid rgba(255, 255, 255, 0.3)",
        sidebarBackgroundColor: "#33393D",
        themePickerBubbleColor:
          "linear-gradient(90deg, black 50%, #2E4C49 50%);",
        subTextColor: "#ddd",
        sidebarBorderColor: "#666",
        borderRadius: "15px",
        gridGap: "16px",
      },
      tile1: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Twitter Feed Tile",
        hackerNewsFeedType: "Top",
      },
      tile2: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Weather Tile",
      },
      tile3: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Todo List",
      },
      tile4: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Reddit Feed",
      },
      tile5: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Day Planner",
      },
      tile6: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Bonsai",
        bonsaiTrunkColor: "#202020",
        bonsaiBaseColor: "#000",
      },
      tile7: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile8: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Small Stock Tile",
      },
      tile9: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Large Spotify Tile",
      },
      tile10: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Time",
      },
      tile11: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        textColor: "#222222",
        tileType: "Theme Picker",
      },
      tile12: {
        backgroundColor: "#65abc1",
        textColor: "#222222",
        tileType: "Popular Links Tile",
      }
    },
  ],
};
