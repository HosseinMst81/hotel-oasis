import { useState, useEffect } from "react";

export default function DesignTokensTestDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode class on the document root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      style={{
        backgroundColor: "var(--color-brand-background)",
        color: "var(--color-brand-foreground)",
        fontFamily: "var(--font-base)",
        minHeight: "100vh",
        padding: "var(--space-8)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* --- DASHBOARD HEADER --- */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--color-border-base)",
          paddingBottom: "var(--space-4)",
          marginBottom: "var(--space-8)",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "var(--text-4xl)",
              fontWeight: "bold",
              lineHeight: "var(--leading-tight)",
              margin: 0,
              background: "var(--gradient-text-brand)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Wild Oasis
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "var(--text-sm)",
              marginTop: "var(--space-1)",
            }}
          >
            Design System Tokens Verification Panel
          </p>
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            backgroundColor: "var(--color-brand-primary)",
            color: "var(--color-text-inverse)",
            border: "none",
            padding: "var(--space-2) var(--space-4)",
            borderRadius: "var(--radius-md)",
            cursor: "pointer",
            fontSize: "var(--text-sm)",
            fontWeight: "600",
            boxShadow: "var(--shadow-sm)",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              "var(--color-primary-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              "var(--color-brand-primary)")
          }
        >
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      {/* --- MAIN GRID LAYOUT --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "var(--space-6)",
        }}
      >
        {/* SECTION 1: BRAND PALETTE */}
        <section style={cardStyle}>
          <h2 style={sectionTitleStyle}>Brand Palette</h2>
          <div style={stackStyle}>
            <div
              style={{
                ...colorBarRow,
                backgroundColor: "var(--color-brand-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              <span>Primary Forest Green</span>
            </div>
            <div
              style={{
                ...colorBarRow,
                backgroundColor: "var(--color-brand-secondary)",
                color: "var(--color-brand-dark)",
              }}
            >
              <span>Secondary Cabin Gold</span>
            </div>
            <div
              style={{
                ...colorBarRow,
                backgroundColor: "var(--color-brand-accent)",
                color: "var(--color-text-inverse)",
              }}
            >
              <span>Accent Rustic Brown</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: SYSTEM STATUS & NEUTRALS */}
        <section style={cardStyle}>
          <h2 style={sectionTitleStyle}>System Status & Subtle Alerts</h2>
          <div style={stackStyle}>
            <div
              style={{
                ...statusBoxStyle,
                backgroundColor: "var(--color-bg-success-subtle)",
                borderColor: "var(--color-border-success)",
                color: "var(--color-brand-success)",
              }}
            >
              <strong>Success State:</strong> Elegant environment matching
              success.
            </div>
            <div
              style={{
                ...statusBoxStyle,
                backgroundColor: "var(--color-bg-warning-subtle)",
                borderColor: "var(--color-brand-warning)",
                color: "var(--color-brand-warning)",
              }}
            >
              <strong>Warning State:</strong> Warm systemic notice indicator.
            </div>
            <div
              style={{
                ...statusBoxStyle,
                backgroundColor: "var(--color-bg-error-subtle)",
                borderColor: "var(--color-border-error)",
                color: "var(--color-text-error)",
              }}
            >
              <strong>Error State:</strong> Critical validation or crash
              notification.
            </div>
          </div>
        </section>

        {/* SECTION 3: INTERACTIVE STATES */}
        <section style={cardStyle}>
          <h2 style={sectionTitleStyle}>Interactive Component States</h2>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-secondary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Hover or focus elements to observe modern <code>color-mix()</code>{" "}
            generation logic.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
            }}
          >
            <button className="btn-test btn-primary-test">
              Primary Button (Hover Me)
            </button>
            <button className="btn-test btn-secondary-test">
              Secondary Button (Hover Me)
            </button>
            <button className="btn-test btn-disabled-test" disabled>
              Disabled State
            </button>
            <input
              type="text"
              placeholder="Focus ring verification input..."
              style={{
                padding: "var(--space-2) var(--space-3)",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-border-base)",
                backgroundColor: "var(--color-brand-light)",
                color: "var(--color-text-primary)",
                outline: "none",
                fontSize: "var(--text-sm)",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 0 3px var(--color-primary-outline)")
              }
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            />
          </div>
        </section>

        {/* SECTION 4: GRADIENTS & SHADOWS */}
        <section style={cardStyle}>
          <h2 style={sectionTitleStyle}>Gradients & Depth Scale</h2>
          <div style={stackStyle}>
            <div
              style={{
                ...gradientBoxStyle,
                background: "var(--gradient-bg-brand)",
                color: "var(--color-text-inverse)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              Brand Background Gradient (Shadow SM)
            </div>
            <div
              style={{
                ...gradientBoxStyle,
                background: "var(--color-gradient-first)",
                color: "var(--color-text-inverse)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              Aurora Wild Gradient (Shadow MD)
            </div>
            <div
              style={{
                ...gradientBoxStyle,
                background: "var(--color-gradient-second)",
                color: "var(--color-text-inverse)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              Instagram Sunrise Variant (Shadow LG)
            </div>
          </div>
        </section>

        {/* SECTION 5: TYPOGRAPHY SCALE */}
        <section style={{ ...cardStyle, gridColumn: "1 / -1" }}>
          <h2 style={sectionTitleStyle}>Typography & Modular Sizing Scale</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              borderTop: "1px solid var(--color-border-base)",
              paddingTop: "var(--space-3)",
            }}
          >
            <div
              style={{
                fontSize: "var(--text-4xl)",
                fontFamily: "var(--font-primary)",
              }}
            >
              4xl Typography Heading ('Cinzel' Serif Option)
            </div>
            <div style={{ fontSize: "var(--text-3xl)", fontWeight: "bold" }}>
              3xl Hierarchy Level Chunk
            </div>
            <div style={{ fontSize: "var(--text-2xl)" }}>
              2xl Dashboard Card Header Size
            </div>
            <div style={{ fontSize: "var(--text-xl)" }}>
              xl Regular Article Subtitle
            </div>
            <div style={{ fontSize: "var(--text-lg)" }}>
              lg Highlighted Body Text Point
            </div>
            <div
              style={{
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              base Standard reading size block using{" "}
              <code>--leading-relaxed</code>. Nature environments balance out
              cleanly with appropriate breathing room metrics across components.
            </div>
            <div
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-text-secondary)",
              }}
            >
              sm Contextual Meta Details and Secondary Information tags
            </div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              xs Fine Print Footnote Data Metrics
            </div>
          </div>
        </section>

        {/* SECTION 6: CUSTOM SCROLLBAR & LOADING INJECTOR */}
        <section style={{ ...cardStyle, gridColumn: "1 / -1" }}>
          <h2 style={sectionTitleStyle}>
            Asynchronous & UI Environment Features
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-8)",
              alignItems: "center",
            }}
          >
            {/* Loading Indicator Sub-Verification */}
            <div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "600",
                  marginBottom: "var(--space-2)",
                }}
              >
                Custom Component Loader Indicator:
              </p>
              <div className="custom-loading-oasis"></div>
            </div>

            {/* Scrollbar Preview Sandbox Box */}
            <div style={{ flex: "1", minWidth: "250px" }}>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "600",
                  marginBottom: "var(--space-2)",
                }}
              >
                Scrollbar Tracking Viewport (Container Shadow & Scrollbar
                Verification Sandbox):
              </p>
              <div
                style={{
                  height: "90px",
                  overflowY: "scroll",
                  padding: "var(--space-3)",
                  backgroundColor: "var(--color-brand-light)",
                  border: "1px solid var(--color-border-base)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <p
                  style={{
                    margin: "0 0 var(--space-2) 0",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  Scroll tracking content line item 1...
                </p>
                <p
                  style={{
                    margin: "0 0 var(--space-2) 0",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  Scroll tracking content line item 2...
                </p>
                <p
                  style={{
                    margin: "0 0 var(--space-2) 0",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  Scroll tracking content line item 3...
                </p>
                <p
                  style={{
                    margin: "0 0 var(--space-2) 0",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  Scroll tracking content line item 4...
                </p>
                <p
                  style={{
                    margin: "0 0 var(--space-2) 0",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  Scroll tracking content line item 5...
                </p>
                <p style={{ margin: "0", fontSize: "var(--text-xs)" }}>
                  End of line list items framework trace.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- REJECT HOVER / INTERACTIVE CLASSES EMULATION STYLESHEET CHIP --- */}
      <style>{`
        .btn-test {
          width: 100%;
          padding: var(--space-2) var(--space-4);
          border: none;
          font-weight: 600;
          font-size: var(--text-sm);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-primary-test {
          background-color: var(--color-brand-primary);
          color: var(--color-text-inverse);
        }
        .btn-primary-test:hover {
          background-color: var(--color-primary-hover);
        }
        .btn-primary-test:active {
          background-color: var(--color-primary-active);
        }
        .btn-primary-test:focus-visible {
          outline: 3px solid var(--color-primary-outline);
        }
        .btn-secondary-test {
          background-color: var(--color-brand-secondary);
          color: var(--color-brand-dark);
        }
        .btn-secondary-test:hover {
          background-color: var(--color-secondary-hover);
        }
        .btn-secondary-test:active {
          background-color: var(--color-secondary-active);
        }
        .btn-disabled-test {
          background-color: var(--color-primary-disabled);
          color: color-mix(in oklch, var(--color-brand-foreground) 30%, transparent);
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

/* --- REUSABLE STATIC CARD AND LAYOUT CSS-IN-JS PATTERNS FOR SANITY VERIFICATION --- */
const cardStyle = {
  backgroundColor: "var(--color-brand-light)",
  border: "1px solid var(--color-border-base)",
  borderRadius: "var(--radius-lg)",
  padding: "var(--space-5)",
  boxShadow: "var(--shadow-sm)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
};

const sectionTitleStyle = {
  margin: "0 0 var(--space-4) 0",
  fontFamily: "var(--font-primary)",
  fontSize: "var(--text-lg)",
  fontWeight: "600",
  letterSpacing: "0.02em",
  borderBottom: "2px solid var(--color-bg-brand-subtle)",
  paddingBottom: "var(--space-1)",
};

const stackStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-3)",
};

const colorBarRow = {
  padding: "var(--space-4)",
  borderRadius: "var(--radius-md)",
  fontSize: "var(--text-sm)",
  fontWeight: "600",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const statusBoxStyle = {
  padding: "var(--space-3)",
  borderRadius: "var(--radius-md)",
  borderWidth: "1px",
  borderStyle: "solid",
  fontSize: "var(--text-sm)",
};

const gradientBoxStyle = {
  padding: "var(--space-4)",
  borderRadius: "var(--radius-md)",
  fontSize: "var(--text-sm)",
  fontWeight: "500",
  textAlign: "center",
};
