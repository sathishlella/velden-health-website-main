import re
import os

# List of files to update
files = [
    "about.html",
    "behavioral-health.html",
    "contact.html",
    "pricing.html",
    "privacy.html",
    "process.html",
    "results.html",
    "services.html"
]

for filename in files:
    if not os.path.exists(filename):
        print(f"⚠️  Skipping {filename} - file not found")
        continue
    
    print(f"Processing {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace footer section with placeholder
    # Pattern matches from <footer to </footer> including all content
    footer_pattern = r'<footer class="site-footer">.*?</footer>'
    replacement = '<!-- Footer Placeholder - Loaded dynamically from components/footer.html -->\n  <div id="footer-placeholder"></div>'
    
    content = re.sub(footer_pattern, replacement, content, flags=re.DOTALL)
    
    # Add components.js script if not already present
    if 'components.js' not in content:
        # Find the first script tag and add components.js before it
        script_pattern = r'(<script src="js/main\.js)'
        script_replacement = r'<script src="js/components.js"></script>\n  \1'
        content = re.sub(script_pattern, script_replacement, content)
    
    # Write the updated content back
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated {filename}")

print("\n✅ All files updated successfully!")
