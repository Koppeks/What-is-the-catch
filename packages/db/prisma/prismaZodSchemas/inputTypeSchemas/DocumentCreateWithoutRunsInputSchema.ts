import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { DocumentTriggerCreateNestedManyWithoutDocumentInputSchema } from './DocumentTriggerCreateNestedManyWithoutDocumentInputSchema';
import { SectionCreateNestedManyWithoutDocumentInputSchema } from './SectionCreateNestedManyWithoutDocumentInputSchema';
import { BlockCreateNestedManyWithoutDocumentInputSchema } from './BlockCreateNestedManyWithoutDocumentInputSchema';

export const DocumentCreateWithoutRunsInputSchema: z.ZodType<Prisma.DocumentCreateWithoutRunsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  locale: z.string().optional().nullable(),
  kind: z.lazy(() => DocumentKindSchema).optional().nullable(),
  type: z.lazy(() => TypeRequestSchema),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  sourceUrl: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  documentRules: z.lazy(() => DocumentTriggerCreateNestedManyWithoutDocumentInputSchema).optional(),
  section: z.lazy(() => SectionCreateNestedManyWithoutDocumentInputSchema).optional(),
  blocks: z.lazy(() => BlockCreateNestedManyWithoutDocumentInputSchema).optional(),
});

export default DocumentCreateWithoutRunsInputSchema;
