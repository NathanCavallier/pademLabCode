-- database: /Users/nathan_img/Documents/pademLabCode/schema.db

-- Appuyez sur le bouton ▷ dans le coin supérieur droit de la fenêtre pour exécuter l'ensemble du fichier.

CREATE TABLE NOTIFICATIONS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    USER_ID INT NOT NULL,
    PROJECT_ID INT NOT NULL,
    USER_EMAIL VARCHAR(255) NULL,
    PROJECT_TITLE VARCHAR(255) NULL,
    SUBJECT VARCHAR(255) NULL,
    MESSAGE TEXT,
    IS_READ BOOLEAN DEFAULT FALSE,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PROJECT_ID) REFERENCES PROJECT(PROJECT_ID) ON DELETE CASCADE,
    FOREIGN KEY (CHIEF_ID) REFERENCES PROJECT_CHIEF(CHIEF_ID) ON DELETE CASCADE,
    FOREIGN KEY (REFERENT_ID) REFERENCES PROJECT_REFERENT(REFERENT_ID) ON DELETE CASCADE,
    FOREIGN KEY (PARTNER_ID) REFERENCES PROJECT_PARTNER(PARTNER_ID) ON DELETE CASCADE,
    FOREIGN KEY (MESSAGE_ID) REFERENCES PROJECT_MESSAGE(MESSAGE_ID) ON DELETE CASCADE,
    FOREIGN KEY (LINK_ID) REFERENCES PROJECT_LINK(LINK_ID) ON DELETE CASCADE,
    FOREIGN KEY (FUNDER_ID) REFERENCES PROJECT_FUNDER(FUNDER_ID) ON DELETE CASCADE,
    FOREIGN KEY (COORDINATOR_ID) REFERENCES PROJECT_COORDINATOR(COORDINATOR_ID) ON DELETE CASCADE,
    FOREIGN KEY (CONSULTANT_ID) REFERENCES PROJECT_CONSULTANT(CONSULTANT_ID) ON DELETE CASCADE,
    FOREIGN KEY (ACCOUNTANT_ID) REFERENCES PROJECT_ACCOUNTANT(ACCOUNTANT_ID) ON DELETE CASCADE
);

-- Notifications