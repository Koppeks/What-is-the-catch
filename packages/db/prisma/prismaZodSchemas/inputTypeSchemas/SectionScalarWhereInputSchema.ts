import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SectionScalarWhereInputSchema: z.ZodType<Prisma.SectionScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SectionScalarWhereInputSchema), z.lazy(() => SectionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SectionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SectionScalarWhereInputSchema), z.lazy(() => SectionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  ordinalPath: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  headingText: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  headingHtml: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  headingAnchor: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default SectionScalarWhereInputSchema;
