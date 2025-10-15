import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const SectionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SectionScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SectionScalarWhereWithAggregatesInputSchema), z.lazy(() => SectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SectionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SectionScalarWhereWithAggregatesInputSchema), z.lazy(() => SectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  headingBlockId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export default SectionScalarWhereWithAggregatesInputSchema;
