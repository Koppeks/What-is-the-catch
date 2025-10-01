import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutClausesInputSchema } from './DocumentUpdateWithoutClausesInputSchema';
import { DocumentUncheckedUpdateWithoutClausesInputSchema } from './DocumentUncheckedUpdateWithoutClausesInputSchema';

export const DocumentUpdateToOneWithWhereWithoutClausesInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutClausesInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutClausesInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutClausesInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutClausesInput>;

export default DocumentUpdateToOneWithWhereWithoutClausesInputSchema;
