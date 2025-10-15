import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutBlockInputSchema } from './SectionCreateWithoutBlockInputSchema';
import { SectionUncheckedCreateWithoutBlockInputSchema } from './SectionUncheckedCreateWithoutBlockInputSchema';
import { SectionCreateOrConnectWithoutBlockInputSchema } from './SectionCreateOrConnectWithoutBlockInputSchema';
import { SectionUpsertWithoutBlockInputSchema } from './SectionUpsertWithoutBlockInputSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateToOneWithWhereWithoutBlockInputSchema } from './SectionUpdateToOneWithWhereWithoutBlockInputSchema';
import { SectionUpdateWithoutBlockInputSchema } from './SectionUpdateWithoutBlockInputSchema';
import { SectionUncheckedUpdateWithoutBlockInputSchema } from './SectionUncheckedUpdateWithoutBlockInputSchema';

export const SectionUpdateOneRequiredWithoutBlockNestedInputSchema: z.ZodType<Prisma.SectionUpdateOneRequiredWithoutBlockNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlockInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SectionCreateOrConnectWithoutBlockInputSchema).optional(),
  upsert: z.lazy(() => SectionUpsertWithoutBlockInputSchema).optional(),
  connect: z.lazy(() => SectionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SectionUpdateToOneWithWhereWithoutBlockInputSchema), z.lazy(() => SectionUpdateWithoutBlockInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutBlockInputSchema) ]).optional(),
});

export default SectionUpdateOneRequiredWithoutBlockNestedInputSchema;
