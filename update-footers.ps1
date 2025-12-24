# PowerShell script to update all HTML files with dynamic footer component
# This script replaces the static footer with a placeholder div

$files = @(
    "about.html",
    "behavioral-health.html",
    "contact.html",
    "pricing.html",
    "privacy.html",
    "process.html",
    "results.html",
    "services.html"
)

foreach ($file in $files) {
    Write-Host "Processing $file..."
    
    $content = Get-Content $file -Raw
    
    # Replace footer section with placeholder
    $content = $content -replace '(?s)<footer class="site-footer">.*?</footer>', '<!-- Footer Placeholder - Loaded dynamically from components/footer.html -->`n  <div id="footer-placeholder"></div>'
    
    # Add components.js script if not already present
    if ($content -notmatch 'components\.js') {
        $content = $content -replace '(<script src="js/main\.js)', '<script src="js/components.js"></script>`n  $1'
    }
    
    # Save the file
    Set-Content -Path $file -Value $content -NoNewline
    
    Write-Host "✓ Updated $file"
}

Write-Host "`n✅ All files updated successfully!"
