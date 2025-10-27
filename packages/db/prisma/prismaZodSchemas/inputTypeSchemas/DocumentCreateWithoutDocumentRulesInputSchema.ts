import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { AnalysisRunCreateNestedManyWithoutDocumentInputSchema } from './AnalysisRunCreateNestedManyWithoutDocumentInputSchema';

export const DocumentCreateWithoutDocumentRulesInputSchema: z.ZodType<Prisma.DocumentCreateWithoutDocumentRulesInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  locale: z.string().optional().nullable(),
  kind: z.lazy(() => DocumentKindSchema).optional().nullable(),
  type: z.lazy(() => TypeRequestSchema),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  sourceUrl: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  runs: z.lazy(() => AnalysisRunCreateNestedManyWithoutDocumentInputSchema).optional(),
});

export default DocumentCreateWithoutDocumentRulesInputSchema;
