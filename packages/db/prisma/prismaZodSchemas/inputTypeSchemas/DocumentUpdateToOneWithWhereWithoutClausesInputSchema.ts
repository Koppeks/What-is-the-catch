import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutClausesInputSchema } from './DocumentUpdateWithoutClausesInputSchema';
import { DocumentUncheckedUpdateWithoutClausesInputSchema } from './DocumentUncheckedUpdateWithoutClausesInputSchema';

export const DocumentUpdateToOneWithWhereWithoutClausesInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutClausesInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutClausesInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutClausesInputSchema) ]),
});

export default DocumentUpdateToOneWithWhereWithoutClausesInputSchema;
