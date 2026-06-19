import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove the Works heading
html = re.sub(r'<p class="section-heading" data-i18n="label-works">Works</p>', '', html)

# 2. Fix the extra </div> tags in the teaching entries.
# They are currently structured like:
#           </div>
#         </div>
# 
#         </section>
# (Sometimes 3 closing divs)
# Let's target the exact string and replace it.

html = html.replace('''          </div>
        </div>
      </div>

      </section>''', '''          </div>
        </section>''')

html = html.replace('''          </div>
        </div>

        </section>''', '''          </div>
        </section>''')

# Write it back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("HTML fixed!")
