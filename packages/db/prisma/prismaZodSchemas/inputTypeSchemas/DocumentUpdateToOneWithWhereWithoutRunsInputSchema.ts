import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutRunsInputSchema } from './DocumentUpdateWithoutRunsInputSchema';
import { DocumentUncheckedUpdateWithoutRunsInputSchema } from './DocumentUncheckedUpdateWithoutRunsInputSchema';

export const DocumentUpdateToOneWithWhereWithoutRunsInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutRunsInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutRunsInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutRunsInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutRunsInput>;

export default DocumentUpdateToOneWithWhereWithoutRunsInputSchema;
