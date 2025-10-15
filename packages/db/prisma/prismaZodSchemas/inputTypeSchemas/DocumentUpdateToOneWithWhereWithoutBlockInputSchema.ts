import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutBlockInputSchema } from './DocumentUpdateWithoutBlockInputSchema';
import { DocumentUncheckedUpdateWithoutBlockInputSchema } from './DocumentUncheckedUpdateWithoutBlockInputSchema';

export const DocumentUpdateToOneWithWhereWithoutBlockInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutBlockInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutBlockInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutBlockInputSchema) ]),
});

export default DocumentUpdateToOneWithWhereWithoutBlockInputSchema;
