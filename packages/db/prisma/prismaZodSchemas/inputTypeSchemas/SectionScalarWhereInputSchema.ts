import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const SectionScalarWhereInputSchema: z.ZodType<Prisma.SectionScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SectionScalarWhereInputSchema), z.lazy(() => SectionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SectionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SectionScalarWhereInputSchema), z.lazy(() => SectionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  headingBlockId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export default SectionScalarWhereInputSchema;
