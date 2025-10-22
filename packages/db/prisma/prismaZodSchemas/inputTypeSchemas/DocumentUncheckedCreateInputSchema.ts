import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { AnalysisRunUncheckedCreateNestedManyWithoutDocumentInputSchema } from './AnalysisRunUncheckedCreateNestedManyWithoutDocumentInputSchema';
import { DocumentTriggerUncheckedCreateNestedManyWithoutDocumentInputSchema } from './DocumentTriggerUncheckedCreateNestedManyWithoutDocumentInputSchema';
import { SectionUncheckedCreateNestedManyWithoutDocumentInputSchema } from './SectionUncheckedCreateNestedManyWithoutDocumentInputSchema';
import { BlockUncheckedCreateNestedManyWithoutDocumentInputSchema } from './BlockUncheckedCreateNestedManyWithoutDocumentInputSchema';

export const DocumentUncheckedCreateInputSchema: z.ZodType<Prisma.DocumentUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  locale: z.string().optional().nullable(),
  kind: z.lazy(() => DocumentKindSchema).optional().nullable(),
  type: z.lazy(() => TypeRequestSchema),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  sourceUrl: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  runs: z.lazy(() => AnalysisRunUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
  section: z.lazy(() => SectionUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
  blocks: z.lazy(() => BlockUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
});

export default DocumentUncheckedCreateInputSchema;
