import os

fixes = {
    'src/components/TopNav.tsx': [
        ("import { useState, useEffect } from 'react';", "import { useState } from 'react';")
    ],
    'src/pages/AdminDashboard.tsx': [
        ("import { getStoredVendors, saveStoredVendor, updateVendorStatus } from '../utils/storage';", "import { getStoredVendors, updateVendorStatus } from '../utils/storage';"),
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ],
    'src/pages/AnalyticsSection.tsx': [
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ],
    'src/pages/AwarenessSection.tsx': [
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ],
    'src/pages/FeedbackSection.tsx': [
        ("import { useState, useEffect } from 'react';", "import { useState } from 'react';"),
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ],
    'src/pages/InspectionSection.tsx': [
        ("import { useState, useEffect } from 'react';", "import { useState } from 'react';"),
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ],
    'src/pages/QRSection.tsx': [
        ("import { useState, useEffect } from 'react';", "import { useState } from 'react';"),
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ],
    'src/pages/RegisterSection.tsx': [
        ("import { useState, useEffect } from 'react';", "import { useState } from 'react';"),
        ("import { getStoredVendors, saveStoredVendor, updateVendorStatus } from '../utils/storage';", "import { getStoredVendors, saveStoredVendor } from '../utils/storage';")
    ],
    'src/pages/SeminarsSection.tsx': [
        ("import { useState, useEffect } from 'react';", "import { useState } from 'react';"),
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ],
    'src/pages/VendorDashboard.tsx': [
        ("import { useState, useEffect } from 'react';", "import { useState } from 'react';"),
        ("import { useNavigate } from 'react-router-dom';\n", "")
    ]
}

for file, replacements in fixes.items():
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            for old, new in replacements:
                content = content.replace(old, new)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
