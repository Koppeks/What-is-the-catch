import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutBlockInputSchema } from './DocumentCreateWithoutBlockInputSchema';
import { DocumentUncheckedCreateWithoutBlockInputSchema } from './DocumentUncheckedCreateWithoutBlockInputSchema';
import { DocumentCreateOrConnectWithoutBlockInputSchema } from './DocumentCreateOrConnectWithoutBlockInputSchema';
import { DocumentUpsertWithoutBlockInputSchema } from './DocumentUpsertWithoutBlockInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutBlockInputSchema } from './DocumentUpdateToOneWithWhereWithoutBlockInputSchema';
import { DocumentUpdateWithoutBlockInputSchema } from './DocumentUpdateWithoutBlockInputSchema';
import { DocumentUncheckedUpdateWithoutBlockInputSchema } from './DocumentUncheckedUpdateWithoutBlockInputSchema';

export const DocumentUpdateOneRequiredWithoutBlockNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutBlockNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlockInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlockInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutBlockInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutBlockInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutBlockInputSchema), z.lazy(() => DocumentUpdateWithoutBlockInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutBlockInputSchema) ]).optional(),
});

export default DocumentUpdateOneRequiredWithoutBlockNestedInputSchema;
